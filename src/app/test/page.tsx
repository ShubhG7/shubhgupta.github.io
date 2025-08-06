export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Icon Test Page</h1>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <img src="/icons/github.svg" alt="GitHub" width={24} height={24} />
          <span>GitHub Icon</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <img src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          <span>LinkedIn Icon</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <img src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          <span>Instagram Icon</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <img src="/icons/scholar.svg" alt="Scholar" width={24} height={24} />
          <span>Scholar Icon</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <img src="/icons/email.svg" alt="Email" width={24} height={24} />
          <span>Email Icon</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <img src="/icons/message.svg" alt="Message" width={24} height={24} />
          <span>Message Icon</span>
        </div>
      </div>
    </div>
  );
} 