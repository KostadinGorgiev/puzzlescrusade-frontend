import React, { useMemo } from "react";
import LevelConfig from "../../config/config.json";
import starlight_blossom from "../../assets/images/portion/ingredients/starlight_blossom.png";
import moonbeam_fern from "../../assets/images/portion/ingredients/moonbeam_fern.png";
import sunfire_lotus from "../../assets/images/portion/ingredients/sunfire_lotus.png";
import shadowvine from "../../assets/images/portion/ingredients/shadowvine.png";
import celestial_ivy from "../../assets/images/portion/ingredients/celestial_ivy.png";
import thunderleaf from "../../assets/images/portion/ingredients/thunderleaf.png";
import frostbloom from "../../assets/images/portion/ingredients/frostbloom.png";
import embergrass from "../../assets/images/portion/ingredients/embergrass.png";
import spiritroot from "../../assets/images/portion/ingredients/spiritroot.png";
import starfall_petal from "../../assets/images/portion/ingredients/starfall_petal.png";
import voidbloom from "../../assets/images/portion/ingredients/voidbloom.png";
import dreamshade from "../../assets/images/portion/ingredients/dreamshade.png";
import phoenix_ember from "../../assets/images/portion/ingredients/phoenix_ember.png";
import starflare_orchid from "../../assets/images/portion/ingredients/starflare_orchid.png";
import stormblossom from "../../assets/images/portion/ingredients/stormblossom.png";
import silverleaf from "../../assets/images/portion/ingredients/silverleaf.png";
import bloodthorn from "../../assets/images/portion/ingredients/bloodthorn.png";
import evergreen_whisper from "../../assets/images/portion/ingredients/evergreen_whisper.png";
import witchwood_vine from "../../assets/images/portion/ingredients/witchwood_vine.png";
import faeflower from "../../assets/images/portion/ingredients/faeflower.png";
import dragonvine from "../../assets/images/portion/ingredients/dragonvine.png";
import serpentleaf from "../../assets/images/portion/ingredients/serpentleaf.png";
import whispering_willow from "../../assets/images/portion/ingredients/whispering_willow.png";
import bloodmoon_lily from "../../assets/images/portion/ingredients/bloodmoon_lily.png";
import soulroot from "../../assets/images/portion/ingredients/soulroot.png";
import dreamthistle from "../../assets/images/portion/ingredients/dreamthistle.png";
import moonshadow_moss from "../../assets/images/portion/ingredients/moonshadow_moss.png";
import starfrost_berry from "../../assets/images/portion/ingredients/starfrost_berry.png";
import spiritbark from "../../assets/images/portion/ingredients/spiritbark.png";
import twilight_rose from "../../assets/images/portion/ingredients/twilight_rose.png";
import voidroot from "../../assets/images/portion/ingredients/voidroot.png";
import emberfern from "../../assets/images/portion/ingredients/emberfern.png";
import nightshade_blossom from "../../assets/images/portion/ingredients/nightshade_blossom.png";
import stardust_lily from "../../assets/images/portion/ingredients/stardust_lily.png";
import frostfire_blossom from "../../assets/images/portion/ingredients/frostfire_blossom.png";
import radiant_sunflower from "../../assets/images/portion/ingredients/radiant_sunflower.png";
import shimmerleaf from "../../assets/images/portion/ingredients/shimmerleaf.png";
import bloodfire_rose from "../../assets/images/portion/ingredients/bloodfire_rose.png";
import starlight_fern from "../../assets/images/portion/ingredients/starlight_fern.png";
import astral_oak from "../../assets/images/portion/ingredients/astral_oak.png";

interface IngredientProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

const Ingredient: React.FC<IngredientProps> = ({
  name,
  className,
  onClick,
}) => {
  const key = useMemo(() => {
    return LevelConfig.ingredients.find(
      (ingredient) => ingredient.name === name
    )?.key as string;
  }, [name]);
  const ingredientImages: any = {
    starlight_blossom: starlight_blossom,
    moonbeam_fern: moonbeam_fern,
    sunfire_lotus: sunfire_lotus,
    shadowvine: shadowvine,
    celestial_ivy: celestial_ivy,
    thunderleaf: thunderleaf,
    frostbloom: frostbloom,
    embergrass: embergrass,
    spiritroot: spiritroot,
    starfall_petal: starfall_petal,
    voidbloom: voidbloom,
    dreamshade: dreamshade,
    phoenix_ember: phoenix_ember,
    starflare_orchid: starflare_orchid,
    stormblossom: stormblossom,
    silverleaf: silverleaf,
    bloodthorn: bloodthorn,
    evergreen_whisper: evergreen_whisper,
    witchwood_vine: witchwood_vine,
    faeflower: faeflower,
    dragonvine: dragonvine,
    serpentleaf: serpentleaf,
    whispering_willow: whispering_willow,
    bloodmoon_lily: bloodmoon_lily,
    soulroot: soulroot,
    dreamthistle: dreamthistle,
    moonshadow_moss: moonshadow_moss,
    starfrost_berry: starfrost_berry,
    spiritbark: spiritbark,
    twilight_rose: twilight_rose,
    voidroot: voidroot,
    emberfern: emberfern,
    nightshade_blossom: nightshade_blossom,
    stardust_lily: stardust_lily,
    frostfire_blossom: frostfire_blossom,
    radiant_sunflower: radiant_sunflower,
    shimmerleaf: shimmerleaf,
    bloodfire_rose: bloodfire_rose,
    starlight_fern: starlight_fern,
    astral_oak: astral_oak,
  };

  return (
    <img
      src={ingredientImages[key]}
      alt={name}
      className={className}
      onClick={() => {
        if (onClick) onClick();
      }}
    />
  );
};

export default Ingredient;
