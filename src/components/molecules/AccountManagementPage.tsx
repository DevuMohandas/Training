import CustomButton from '../atoms/CustomButton';

const AccountManagementPage = () => {
  return (
    <div className="flex flex-col flex-1 w-full h-full pt-space-12 px-space-10">
      <div className="flex flex-col text-primary">
        <div className="text-xl font-system-bold">Account Management</div>
        <div className="flex flex-col text-lg leading-7 font-system-regular mt-space-06">
          <div>Deleting your account will remove all of your information from our</div>
          <div> database. This cannot be undone.</div>
        </div>
        <div className="mt-space-12"><CustomButton text="Delete Account" variant="primary" icon="/assets/icons/delete-vector.svg" className="" /></div>
      </div>
    </div>
  );
};

export default AccountManagementPage;
