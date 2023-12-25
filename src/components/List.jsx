const List = ({ countries }) => {
  return (
    <div className="cont">
      <div className="country-cont">
        {countries.map((country) => {
          const { population, capital, ccn3, region } = country;
          const { common } = country.name;
          const { png } = country.flags;
          return (
            <div key={ccn3} className="country">
              <div className="flag">
                <img src={png} />
              </div>
              <div className="details">
                <h2>{common}</h2>
                <p>
                  Population:<span> {population.toLocaleString("en-EN")}</span>
                </p>
                <p>
                  Region:<span>{region}</span>{" "}
                </p>
                <p>
                  Capital: <span>{capital}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default List;
