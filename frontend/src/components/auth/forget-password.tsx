import React from 'react';
import Input from '@components/ui/forms/Input';
import Button from '@components/ui/forms/button';

const ForgetPassword = () => {
  return (
    <div className="font-roboto tracking-wide bg-gray-200 min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-2/4 lg:w-11/12 flex items-center justify-center">
            {/* Form */}
            <div className="w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Enter Your Email</h3>
              <form className="px-8 mb-4 bg-white rounded mt-4">
                {/* Email */}
                <div className="mb-6 md:mr-2 md:mb-0">
                  <Input type="email" id="email" placeholder="Email" />
                </div>

                {/* Button */}
                <div className="my-6 text-center">
                  <Button label="Reset Password" />
                </div>

                <hr className="mb-6 border-t" />

                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  >
                    Don't have account? Signup!
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
