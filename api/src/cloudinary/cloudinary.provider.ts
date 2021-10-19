import { v2 } from 'cloudinary';
import { CLOUDINARY } from './cloudinary.constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: 'tareqmahmud',
      api_key: '441254869873982',
      api_secret: 'ViAiSGQAZtZh9dAESursZsfwk6U',
    });
  },
};
