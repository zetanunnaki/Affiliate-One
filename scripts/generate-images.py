"""
Generate image assets for BuySecureVPN using Google Gemini API.

Generates:
- Author headshot illustrations (SVG with Gemini-generated face descriptions)
- VPN provider logo placeholders (SVG)
- Site hero illustrations (PNG via Gemini imagen)

Usage:
  pip install google-genai Pillow
  set GEMINI_API_KEY=your_key_here
  python scripts/generate-images.py

Reads GEMINI_API_KEY from environment.
"""

import os
import sys
import json
import base64
from pathlib import Path

# Try to import google genai
try:
    from google import genai
    from google.genai import types
    HAS_GENAI = True
except ImportError:
    HAS_GENAI = False
    print("WARNING: google-genai not installed. Run: pip install google-genai")
    print("Generating SVG placeholders only (no AI-generated images).")

# Paths
ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
AUTHORS_DIR = PUBLIC / "images" / "authors"
PROVIDERS_DIR = PUBLIC / "images" / "providers"
ILLUSTRATIONS_DIR = PUBLIC / "images" / "illustrations"

# Ensure directories
AUTHORS_DIR.mkdir(parents=True, exist_ok=True)
PROVIDERS_DIR.mkdir(parents=True, exist_ok=True)
ILLUSTRATIONS_DIR.mkdir(parents=True, exist_ok=True)


def create_author_svg(name: str, role: str, color: str, filename: str):
    """Create a professional author headshot SVG placeholder."""
    initials = "".join(w[0] for w in name.split()[:2])
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
  <title>{name} — {role} at BuySecureVPN</title>
  <desc>Professional headshot of {name}, {role}. Expert security writer and VPN reviewer.</desc>
  <!-- Background -->
  <rect width="200" height="200" rx="100" fill="{color}"/>
  <!-- Subtle gradient overlay -->
  <defs>
    <radialGradient id="g_{initials}" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="white" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="white" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="200" height="200" rx="100" fill="url(#g_{initials})"/>
  <!-- Head silhouette -->
  <circle cx="100" cy="78" r="38" fill="white" opacity="0.9"/>
  <!-- Body silhouette -->
  <ellipse cx="100" cy="175" rx="55" ry="45" fill="white" opacity="0.9"/>
  <!-- Initials overlay -->
  <text x="100" y="90" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="36" font-weight="700" fill="{color}" opacity="0.6">{initials}</text>
</svg>'''
    filepath = AUTHORS_DIR / filename
    filepath.write_text(svg, encoding="utf-8")
    print(f"  Created: {filepath.relative_to(ROOT)}")


def create_provider_svg(name: str, primary_color: str, accent_color: str, icon_type: str, filename: str):
    """Create a VPN provider logo SVG."""

    icons = {
        "shield": '<path d="M50 15L15 30V55C15 80 50 95 50 95C50 95 85 80 85 55V30L50 15Z" fill="{primary}" stroke="{accent}" stroke-width="2"/><path d="M38 52L47 61L65 43" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
        "lock": '<rect x="30" y="45" width="40" height="35" rx="4" fill="{primary}"/><path d="M37 45V35C37 27 43 20 50 20C57 20 63 27 63 35V45" stroke="{primary}" stroke-width="4" fill="none"/><circle cx="50" cy="60" r="5" fill="white"/>',
        "globe": '<circle cx="50" cy="50" r="33" fill="none" stroke="{primary}" stroke-width="3"/><ellipse cx="50" cy="50" rx="15" ry="33" fill="none" stroke="{primary}" stroke-width="2"/><line x1="17" y1="50" x2="83" y2="50" stroke="{primary}" stroke-width="2"/><line x1="50" y1="17" x2="50" y2="83" stroke="{primary}" stroke-width="2"/>',
        "key": '<circle cx="40" cy="45" r="18" fill="none" stroke="{primary}" stroke-width="3"/><line x1="55" y1="55" x2="80" y2="80" stroke="{primary}" stroke-width="3"/><line x1="70" y1="70" x2="78" y2="62" stroke="{primary}" stroke-width="3"/><line x1="75" y1="75" x2="83" y2="67" stroke="{primary}" stroke-width="3"/>',
        "eye": '<ellipse cx="50" cy="50" rx="30" ry="20" fill="none" stroke="{primary}" stroke-width="3"/><circle cx="50" cy="50" r="10" fill="{primary}"/><circle cx="50" cy="50" r="4" fill="white"/>',
    }

    icon_svg = icons.get(icon_type, icons["shield"])
    icon_svg = icon_svg.replace("{primary}", primary_color).replace("{accent}", accent_color)

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="200" height="60">
  <title>{name} — VPN Provider reviewed by BuySecureVPN</title>
  <desc>{name} logo. Independent VPN review and comparison on BuySecureVPN.</desc>
  <!-- Icon -->
  <g transform="translate(5,2) scale(0.56)">{icon_svg}</g>
  <!-- Name -->
  <text x="50" y="38" font-family="system-ui,-apple-system,sans-serif" font-size="18" font-weight="700" fill="{primary}">{name}</text>
</svg>'''
    filepath = PROVIDERS_DIR / filename
    filepath.write_text(svg, encoding="utf-8")
    print(f"  Created: {filepath.relative_to(ROOT)}")


def create_hero_svg(title: str, subtitle: str, filename: str):
    """Create a hero illustration SVG for landing pages."""
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <title>{title}</title>
  <desc>{subtitle}</desc>
  <!-- Background gradient -->
  <defs>
    <linearGradient id="hero_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e3a5f"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="shield_grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#hero_bg)"/>

  <!-- Decorative circles -->
  <circle cx="900" cy="200" r="180" fill="#1e40af" opacity="0.15"/>
  <circle cx="1000" cy="400" r="120" fill="#3b82f6" opacity="0.1"/>
  <circle cx="200" cy="500" r="100" fill="#1e40af" opacity="0.1"/>

  <!-- Shield icon -->
  <g transform="translate(520, 140) scale(2.5)">
    <path d="M32 5L5 18V42C5 65 32 80 32 80C32 80 59 65 59 42V18L32 5Z" fill="url(#shield_grad)" stroke="#60a5fa" stroke-width="1.5"/>
    <path d="M20 40L29 49L46 32" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Brand -->
  <text x="600" y="400" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="48" font-weight="700" fill="white">BuySecureVPN</text>
  <text x="600" y="450" text-anchor="middle" font-family="system-ui,-apple-system,sans-serif" font-size="22" fill="#94a3b8">{subtitle}</text>

  <!-- Network nodes decoration -->
  <g opacity="0.2" stroke="#60a5fa" stroke-width="1" fill="none">
    <circle cx="150" cy="150" r="4" fill="#60a5fa"/>
    <circle cx="300" cy="100" r="3" fill="#60a5fa"/>
    <circle cx="100" cy="300" r="3" fill="#60a5fa"/>
    <circle cx="1050" cy="150" r="4" fill="#60a5fa"/>
    <circle cx="1100" cy="300" r="3" fill="#60a5fa"/>
    <circle cx="950" cy="500" r="3" fill="#60a5fa"/>
    <line x1="150" y1="150" x2="300" y2="100"/>
    <line x1="150" y1="150" x2="100" y2="300"/>
    <line x1="1050" y1="150" x2="1100" y2="300"/>
    <line x1="1100" y1="300" x2="950" y2="500"/>
  </g>
</svg>'''
    filepath = ILLUSTRATIONS_DIR / filename
    filepath.write_text(svg, encoding="utf-8")
    print(f"  Created: {filepath.relative_to(ROOT)}")


def generate_with_gemini():
    """Generate raster images using Gemini API if available."""
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("\nGEMINI_API_KEY not set — skipping AI image generation.")
        print("Set it with: set GEMINI_API_KEY=your_key")
        return

    if not HAS_GENAI:
        print("\ngoogle-genai not installed — skipping AI image generation.")
        return

    print("\n--- Generating AI images with Gemini ---")

    client = genai.Client(api_key=api_key)

    prompts = [
        {
            "prompt": "Professional minimalist illustration of a shield with a checkmark protecting a laptop computer, blue gradient background, cybersecurity theme, clean modern vector style, no text",
            "filename": "hero-shield-laptop.png",
            "dir": ILLUSTRATIONS_DIR,
            "alt": "VPN shield protecting laptop — BuySecureVPN cybersecurity illustration"
        },
        {
            "prompt": "Minimalist illustration of a person working remotely on a laptop in a cafe with a glowing VPN shield icon, blue and white color scheme, flat design style, no text",
            "filename": "hero-remote-work.png",
            "dir": ILLUSTRATIONS_DIR,
            "alt": "Remote worker protected by VPN in cafe — BuySecureVPN"
        },
        {
            "prompt": "Clean minimalist world map with glowing connection lines between major cities, blue nodes on dark background, representing global VPN server network, no text, modern flat style",
            "filename": "hero-global-network.png",
            "dir": ILLUSTRATIONS_DIR,
            "alt": "Global VPN server network map — BuySecureVPN worldwide coverage"
        },
    ]

    for item in prompts:
        try:
            print(f"  Generating: {item['filename']}...")
            response = client.models.generate_images(
                model="imagen-3.0-generate-002",
                prompt=item["prompt"],
                config=types.GenerateImagesConfig(
                    number_of_images=1,
                    aspect_ratio="16:9",
                    safety_filter_level="BLOCK_ONLY_HIGH",
                ),
            )

            if response.generated_images:
                img_bytes = response.generated_images[0].image.image_bytes
                filepath = item["dir"] / item["filename"]
                filepath.write_bytes(img_bytes)
                print(f"    Saved: {filepath.relative_to(ROOT)}")
            else:
                print(f"    No image generated for {item['filename']}")

        except Exception as e:
            print(f"    Error generating {item['filename']}: {e}")


def main():
    print("=== BuySecureVPN Image Asset Generator ===\n")

    # --- Author Headshots (SVG) ---
    print("--- Author Headshots ---")
    authors = [
        ("Sarah Chen", "Lead Security Editor", "#2563eb", "sarah-chen.svg"),
        ("Marcus Johnson", "VPN & Privacy Analyst", "#059669", "marcus-johnson.svg"),
        ("Elena Rodriguez", "Travel Security Writer", "#d97706", "elena-rodriguez.svg"),
    ]
    for name, role, color, filename in authors:
        create_author_svg(name, role, color, filename)

    # --- Provider Logos (SVG) ---
    print("\n--- Provider Logos ---")
    providers = [
        ("NordVPN", "#4687ff", "#1a3a6b", "shield", "nordvpn.svg"),
        ("Surfshark", "#1fc8b0", "#0d7a6a", "globe", "surfshark.svg"),
        ("ExpressVPN", "#da3940", "#8b1a1f", "lock", "expressvpn.svg"),
        ("Proton VPN", "#6d4aff", "#3d2a8f", "key", "protonvpn.svg"),
        ("Mullvad", "#294d73", "#1a3350", "eye", "mullvad.svg"),
    ]
    for name, primary, accent, icon, filename in providers:
        create_provider_svg(name, primary, accent, icon, filename)

    # --- Hero / OG Illustrations (SVG) ---
    print("\n--- Hero Illustrations ---")
    heroes = [
        ("BuySecureVPN — Work Securely From Anywhere", "Independent VPN reviews and security guides for remote workers", "og-default.svg"),
        ("Best VPN 2026", "Expert-tested and independently reviewed", "og-best-vpn.svg"),
        ("VPN Country Guide", "Coverage for 200+ countries worldwide", "og-countries.svg"),
    ]
    for title, subtitle, filename in heroes:
        create_hero_svg(title, subtitle, filename)

    # --- AI-Generated Images (Gemini) ---
    generate_with_gemini()

    print(f"\n=== Done! ===")
    print(f"  Authors:       {len(authors)} SVG headshots")
    print(f"  Providers:     {len(providers)} SVG logos")
    print(f"  Illustrations: {len(heroes)} SVG heroes")
    print(f"\nAll images include <title> and <desc> tags for SEO accessibility.")


if __name__ == "__main__":
    main()
