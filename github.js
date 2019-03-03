class Github {
  constructor() {
    this.client_id = '1d4f4ee0b49618b587f3';
    this.client_secret = '8c5da5c12b4284f573304f7ecd8bdeefd380f2da';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}