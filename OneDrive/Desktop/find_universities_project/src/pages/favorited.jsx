import React, { useContext } from "react";
import AddedUniversity from "../components/AddedUniversity";
import { Context } from "../Context";

export default function Favorited() {
  const { favoriteUniArray } = useContext(Context);

  const favoritedUnis = favoriteUniArray.map((uni) => (
    <AddedUniversity key={uni.name} name={uni.name} website={uni.website} />
  ));

  const loadingCondition = favoriteUniArray.length > 0;

  const noItems = (
    <div className="noItems">
      <h1>You haven't added any universities yet!</h1>
      <h3>🏫 To add universities, go to the main page</h3>
      <h3>🌎 Select a country you're interested in</h3>
      <h3>❤️ Add any university your heart desiers to favorites</h3>
      <h3>🎉 Boom!</h3>
    </div>
  );

  function renderFavorites() {
    if (loadingCondition) {
      return <div className="favoritedPage">{favoritedUnis}</div>;
    } else {
      return noItems;
    }
  }

  console.log(favoriteUniArray);

  return renderFavorites();
}
