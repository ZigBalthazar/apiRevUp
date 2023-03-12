import {Request, Response, NextFunction} from "express";


interface cacheOptions {
    maxAge: number ;
    private?: boolean;
    noCache?: boolean;
    noStore?: boolean;
}

export default function apiRevUp(options: cacheOptions) {
    return function (req: Request, res: Response, next: NextFunction) {
      
      const maxAge = `max-age=${options.maxAge}`;
  
      
      let cacheControl = [maxAge];
  
      if (options.private) {
        cacheControl.push('private');
      }
  
      if (options.noCache) {
        cacheControl.push('no-cache');
      }
  
      if (options.noStore) {
        cacheControl.push('no-store');
      }
  
      res.setHeader('Cache-Control', cacheControl.join(', '));
  
      next();
    };
  }


