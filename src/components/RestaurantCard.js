const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = ({ resData }) => {
  const {
    restaurantLogoUrl,
    restaurantName,
    restaurantAddress,
    restaurantCuisineKeysList,
    reviewsRankDecimal,
    deliveryTimeInMinutes,
  } = resData;

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={restaurantLogoUrl} />
      <h3>{restaurantName}</h3>
      <h3>{restaurantAddress}</h3>
      <h4>{restaurantCuisineKeysList?.join(", ")}</h4>
      <h4>{reviewsRankDecimal} stars</h4>
      <h4>{deliveryTimeInMinutes} minuts</h4>
    </div>
  );
};

export default RestaurantCard;
