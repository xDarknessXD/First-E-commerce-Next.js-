import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import Link from 'next/link';
import {
  Facebook,
  Github,
  GithubIcon,
  Linkedin,
  Slack,
  Youtube,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/',
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: 'Github',
    href: 'https://github.com/xDarknessXD',
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jhayri-kabristante-8a86aa328/',
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61569156913001',
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: 'Slack',
    href: 'https://www.slack.com/',
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn('flex mt-4 items-center gap-6', className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target='_blank'
                rel=''
                className={cn(
                  'p-2 border rounded-full hover:text-white hover:border-white hoverEffect hover:scale-110',
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                'bg-white text-darkColor font-semibold',
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
