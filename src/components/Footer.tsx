import React from 'react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ShubhG7',
      icon: '/icons/github.svg',
      color: 'hover:text-gray-700 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shubhngupta/',
      icon: '/icons/linkedin.svg',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shubhguptaaa/',
      icon: '/icons/instagram.svg',
      color: 'hover:text-pink-600 dark:hover:text-pink-400'
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOv-ny9OrQpfkCveHE6Ky1FrVJFS0YskbX6_iYiwv-DbUvbyrcWFfT3Nj-smbNtZaTrn14FKVi2tqyaskTdiXw&user=gh_thNwAAAAJ',
      icon: '/icons/scholar.svg',
      color: 'hover:text-green-600 dark:hover:text-green-400'
    }
  ];

  const contactOptions = [
    {
      name: 'Email',
      url: 'mailto:shubhngupta7@gmail.com',
      icon: '/icons/email.svg',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    },
    {
      name: 'Message',
      url: '#contact',
      icon: '/icons/message.svg',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    }
  ];

  return (
    <footer
      className="w-full py-8 px-4 text-sm transition-colors duration-300 relative z-5 border-t border-gray-200 dark:border-gray-700"
      style={{ color: 'var(--text-main)' }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Social Links */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              aria-label={link.name}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${link.color} hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              <img
                src={link.icon}
                alt={link.name}
                width={20}
                height={20}
                className="transition-transform duration-300 hover:scale-110"
              />
              <span className="hidden sm:inline">{link.name}</span>
            </a>
          ))}
        </div>

        {/* Contact Options */}
        <div className="flex justify-center items-center space-x-6 mb-6">
          {contactOptions.map((option) => (
            <a
              key={option.name}
              href={option.url}
              aria-label={option.name}
              target={option.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel={option.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
              className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${option.color} hover:bg-gray-100 dark:hover:bg-gray-800`}
            >
              <img
                src={option.icon}
                alt={option.name}
                width={20}
                height={20}
                className="transition-transform duration-300 hover:scale-110"
              />
              <span className="hidden sm:inline">{option.name}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center font-medium" style={{ color: 'var(--text-main)' }}>
          <p className="text-base">© {new Date().getFullYear()} Shubh Gupta. All rights reserved.</p>
          <p className="mt-1 text-sm opacity-80">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
