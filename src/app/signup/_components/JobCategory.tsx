'use client';

import BottomModal from '@/components/BottomModal';
import { ArrowSVG3 } from '@/icons/index';
import { JobCategorie } from '@/types/types';
import { useState } from 'react';

interface JobCategoryProps {
  jobCategories: JobCategorie[];
  onChange: (jobCategory: { id: number } | null) => void;
}

function JobCategory({ jobCategories, onChange }: JobCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJobCategory, setSelectedJobCategory] =
    useState<JobCategorie | null>(null);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleJobCategoryChange = (jobCategory: JobCategorie) => {
    setSelectedJobCategory(jobCategory);
    onChange({ id: jobCategory.id });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`${selectedJobCategory ? 'text-black' : 'text-gray-B80/55'} relative mb-[30px] h-[54px] w-full rounded-2xl border border-solid border-gray-B40 text-sm font-medium`}
      >
        {selectedJobCategory
          ? selectedJobCategory.engName
          : 'Select job category'}
        <ArrowSVG3 className="absolute -right-7 top-5 size-16 fill-gray-B40" />
      </button>
      {isOpen && (
        <BottomModal closeModal={handleCloseModal}>
          <div className="flex flex-col gap-[10px]">
            <h1 className="mb-1 px-[26px] text-lg font-bold text-blue-B50">
              Job category
            </h1>
            <p className="mb-3 px-[26px]">Select only one</p>
            <ul className="mb-14 flex max-h-[55vh] flex-col gap-[10px] overflow-y-auto px-[26px] text-sm font-medium text-black">
              {jobCategories.map((jobCategory) => (
                <li
                  key={jobCategory.id}
                  className={`${selectedJobCategory?.id === jobCategory.id ? 'bg-yellow-primary font-semibold' : ''} rounded-2xl border border-solid border-gray-B40`}
                >
                  <button
                    type="button"
                    className="flex h-[54px] w-full items-center justify-center"
                    onClick={() => handleJobCategoryChange(jobCategory)}
                  >
                    {jobCategory.engName}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </BottomModal>
      )}
    </>
  );
}

export default JobCategory;
