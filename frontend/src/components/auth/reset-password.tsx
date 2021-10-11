import React from 'react';
import Input from '@components/ui/forms/Input';
import Button from '@components/ui/forms/button';
import Label from '@components/ui/forms/label';

const ResetPassword = () => {
  return (
    <div className="font-roboto tracking-wide bg-gray-200 min-h-screen">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-2/4 lg:w-11/12 flex items-center justify-center">
            {/* Form */}
            <div className="w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Reset Password</h3>
              <form className="px-8 mb-4 bg-white rounded mt-4">
                {/* Password */}
                <div className="w-full my-5">
                  <Label label="Password" htmlFor="password" />
                  <Input
                    type="password"
                    id="password"
                    placeholder="******************"
                  />
                </div>

                {/* Confirm Password */}
                <div className="w-full my-5">
                  <Label label="Confirm Password" htmlFor="confirmPassword" />
                  <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="******************"
                  />
                  <p className="text-xs italic text-red-500 mt-2">
                    Invalid confirm password
                  </p>
                </div>

                {/* Button */}
                <div className="my-6 text-center">
                  <Button label="Update Password" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
