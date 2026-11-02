import {
  Sparkles, Smile, Wand2, Scaling, ShieldPlus, Droplets, Gem, Baby,
} from 'lucide-react'

export const services = [
  {
    slug: 'dental-implants',
    name: 'Dental Implants',
    icon: Gem,
    tagline: 'Permanent, natural-looking tooth replacement',
    description:
      'Titanium implants fused to the jawbone, topped with a custom crown that looks, feels and functions like a natural tooth.',
    benefits: [
      'Permanent solution that does not shift or slip',
      'Preserves jawbone structure and facial shape',
      'Matched to your natural tooth colour and shape',
      'Cared for like a normal tooth, no special routine',
    ],
    accent: 'blue',
  },
  {
    slug: 'teeth-whitening',
    name: 'Teeth Whitening',
    icon: Sparkles,
    tagline: 'A brighter smile in a single visit',
    description:
      'Professional-grade whitening that lifts years of staining safely, under the supervision of our clinical team.',
    benefits: [
      'Visible results in one appointment',
      'Safer and longer lasting than over-the-counter kits',
      'Shade matched to a natural, even finish',
      'Take-home maintenance kit available',
    ],
    accent: 'sky',
  },
  {
    slug: 'dental-veneers',
    name: 'Dental Veneers',
    icon: Smile,
    tagline: 'Thin, custom shells for a refined smile',
    description:
      'Porcelain veneers correct chips, gaps and discolouration while preserving as much of the natural tooth as possible.',
    benefits: [
      'Corrects shape, size, gaps and colour together',
      'Stain resistant porcelain finish',
      'Minimally invasive preparation',
      'Designed around your facial proportions',
    ],
    accent: 'mint',
  },
  {
    slug: 'orthodontics',
    name: 'Orthodontics and Braces',
    icon: Scaling,
    tagline: 'Straighter teeth, for every age',
    description:
      'Traditional braces and clear aligner options to gradually guide teeth into alignment, improving bite and appearance.',
    benefits: [
      'Options for children, teens and adults',
      'Clear aligners available for a discreet treatment',
      'Improves bite function, not only appearance',
      'Regular progress reviews throughout treatment',
    ],
    accent: 'navy',
  },
  {
    slug: 'root-canal',
    name: 'Root Canal Treatment',
    icon: ShieldPlus,
    tagline: 'Relieve pain, save the natural tooth',
    description:
      'A precise procedure that removes infected tissue from inside the tooth, stopping pain and avoiding extraction.',
    benefits: [
      'Removes infection and relieves pain',
      'Saves the natural tooth where possible',
      'Performed comfortably with modern technique',
      'Protective crown fitted afterwards where needed',
    ],
    accent: 'sand',
  },
  {
    slug: 'teeth-cleaning',
    name: 'Teeth Cleaning',
    icon: Droplets,
    tagline: 'Routine care that prevents bigger problems',
    description:
      'Thorough professional cleaning that removes plaque and tartar buildup that a home routine alone cannot reach.',
    benefits: [
      'Removes plaque and tartar buildup',
      'Freshens breath and brightens appearance',
      'Early detection of developing issues',
      'Recommended every six months',
    ],
    accent: 'blue',
  },
  {
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    icon: Wand2,
    tagline: 'Smile design built around you',
    description:
      'A combined approach, whitening, shaping and alignment, planned together to design a smile that suits your face.',
    benefits: [
      'A smile plan tailored to your features',
      'Combines several treatments where needed',
      'Digital preview before any work begins',
      'Natural looking, long lasting results',
    ],
    accent: 'sky',
  },
  {
    slug: 'pediatric-dentistry',
    name: 'Pediatric Dentistry',
    icon: Baby,
    tagline: 'Gentle dental care for young patients',
    description:
      'A calm, friendly environment and age appropriate techniques that help children build positive habits early.',
    benefits: [
      'Child friendly clinic environment',
      'Preventive care and habit coaching',
      'Gentle techniques suited to young patients',
      'Parents welcome throughout the visit',
    ],
    accent: 'mint',
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
