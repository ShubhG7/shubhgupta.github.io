import React from 'react';

const Footer = () => (
  <footer
    className="w-full text-center p-4 border-t border-[#4b2e13] text-sm dark:border-gray-600 transition-colors duration-300"
    style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
  >
    <div>© {new Date().getFullYear()} Shubh Gupta</div>
    <div className="space-x-2 mt-2">
      <a href="https://github.com/username" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-[#4b2e13] hover:underline dark:hover:text-gray-300 transition-colors">GitHub</a>
      <a href="https://linkedin.com/in/username" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-[#4b2e13] hover:underline dark:hover:text-gray-300 transition-colors">LinkedIn</a>
      <a href="https://instagram.com/username" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-[#4b2e13] hover:underline dark:hover:text-gray-300 transition-colors">Instagram</a>
      <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOv-ny9OrQpfkCveHE6Ky1FrVJFS0YskbX6_iYiwv-DbUvbyrcWFfT3Nj-smbNtZaTrn14FKVi2tqyaskTdiXw&user=gh_thNwAAAAJ" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer" className="hover:text-[#4b2e13] hover:underline dark:hover:text-gray-300 transition-colors">
        Scholar
      </a>
    </div>
  </footer>
);

export default Footer;
