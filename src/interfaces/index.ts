// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}


interface SocialNetworks {
  instagramLink: string;
  facebookLink: string;
  linkedinLink: string;
  twitterLink: string;
}

export type SiteSetting = {
  enterpriseName: string,
  aboutUs:  string,
  socialNetworks: SocialNetworks
}