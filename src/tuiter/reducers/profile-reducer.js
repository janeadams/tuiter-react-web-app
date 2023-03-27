import { createSlice } from "@reduxjs/toolkit";

const profile = {
    firstName: "Random",
    lastName: "Person",
    handle: "@randomperson",
    profilePicture: "https://static.vecteezy.com/system/resources/previews/011/459/669/original/people-avatar-icon-png.png",
    bannerPicture: "https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/77024851_1730687270394822_4824706900136296448_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=6MOTGd4CnzkAX8f-ik4&_nc_ht=scontent-bos5-1.xx&oh=00_AfDsonPB64kdg-U2iiGx53Mv1ZLUCYP00kP0FB2Jhil9Mg&oe=644866F5",
    bio: "This is a random person's profile. Unionize your workplace!",
    website: "https://www.nugradunion.com/vote-yes/",
    location: "Boston, MA",
    dateOfBirth: "9/9/1999",
    dateJoined: "9/2010",
    followingCount: 1234,
    followersCount: 5678,
    tuits: 6138
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: profile,
        reducers: {
            updateUser(state, action) {
                state.firstName = action.payload.firstName;
                state.lastName = action.payload.lastName;
                state.handle = action.payload.handle;
                state.bio = action.payload.bio;
                state.location = action.payload.location;
                state.website = action.payload.website;
                state.dateOfBirth = action.payload.dateOfBirth;
            }
        }
    }
);

export const {updateUser} = profileSlice.actions;
export default profileSlice.reducer;