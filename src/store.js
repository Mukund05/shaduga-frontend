import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/Userslice";
// import chatReducer from "./slice/ChatSlice";
import communityReducer from "./slice/Communities";
// import leaderBoardReducer from "./slice/LeaderBoard";
// import memberReducer from "./slice/members";
import questReducer from "./slice/Quests";
// import reviewReducer from "./slice/review";
// import subscriptionReducer from "./slice/subscription";
// import taskReducer from "./slice/tasks";
// import influencerReducer from "./slice/influencers";

const store = configureStore({
  reducer: {
    user: userReducer,

    // chat: chatReducer,
    community: communityReducer,
    // leaderBoard: leaderBoardReducer,
    // members: memberReducer,
    quests: questReducer,
    // reviews: reviewReducer,
    // subscription: subscriptionReducer,
    // tasks: taskReducer,
    // influencers: influencerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
