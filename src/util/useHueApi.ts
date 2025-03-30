type Command = {
  path?: string;
  method?: string;
  body?: object;
};

export const useHueApi = (user: string | null) => {
  const toggleLights = async (id: number | string) => {
    const path = `groups/${id}`;
    const cmd: Command = {
      path: path,
    };
    const group = await execute(cmd);
    const on = group["state"]["any_on"];
    if (on) {
      turnGroupOff(id);
    } else {
      turnGroupOn(id);
    }
  };

  const turnGroupOn = (id: number | string) => {
    const path = `groups/${id}/action`;
    const body = { on: true };
    const cmd: Command = {
      path: path,
      method: "PUT",
      body: body,
    };
    execute(cmd);
  };

  const turnGroupOff = (id: number | string) => {
    const path = `groups/${id}/action`;
    const body = { on: false };
    const cmd: Command = {
      path: path,
      method: "PUT",
      body: body,
    };
    execute(cmd);
  };

  const setBrightness = (brightness: number, id: number | string) => {
    const path = `groups/${id}/action`;
    const body = { bri: brightness, on: true };
    const cmd: Command = {
      path: path,
      method: "PUT",
      body: body,
    };
    execute(cmd);
  };

  const incBrightness = (id: number | string) => {
    const path = `groups/${id}/action`;
    const body = { bri_inc: 13 };
    const cmd: Command = {
      path: path,
      method: "PUT",
      body: body,
    };
    execute(cmd);
  };

  const decBrightness = (id: number | string) => {
    const path = `groups/${id}/action`;
    const body = { bri_inc: -13 };
    const cmd: Command = {
      path: path,
      method: "PUT",
      body: body,
    };
    execute(cmd);
  };

  const getAllBedrooms = async () => {
    const cmd: Command = {
      path: "groups",
    };
    const groups = await execute(cmd);
    if (!groups) return [];
    const bedrooms: object[] = [];
    Object.keys(groups)
      .filter((k) => groups[k]["class"] === "Bedroom")
      .forEach((k) => {
        groups[k]["id"] = k;
        bedrooms.push(groups[k]);
      });
    return bedrooms;
  };

  const setSaturation = (saturation: number, id: string | number) => {
    const path = `groups/${id}/action`;
    const body = {
      sat: saturation,
    };
    const cmd: Command = {
      path: path,
      method: "PUT",
      body: body,
    };
    execute(cmd);
  };

  const execute = async ({ path, method, body }: Command) => {
    if (user === "") return {};
    const URL = `http://192.168.10.102/api/${user}/${path}`;
    try {
      const response = await fetch(URL, {
        method: method,
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        console.error(`Request failed: ${response.status}`);
        return null;
      }
      const json = await response.json();
      return json;
    } catch (err) {
      return null;
    }
  };

  return {
    toggleLights,
    setBrightness,
    incBrightness,
    decBrightness,
    setSaturation,
    getAllBedrooms,
  };
};
