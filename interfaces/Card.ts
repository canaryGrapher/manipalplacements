// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:

export type Card = {
  companyName: string;
  offerType: string;
  ctc?: string;
  registrationLink?: string;
  eligibleBranches: Array<string>;
  profile?: string;
  deadline?: Date;
  standbyOffer?: boolean;
  backlogsAllowed?: boolean;
  description?: string;
  file?: string;
  companyImage?: string;
};
