$(document).ready(function () {
    // console.log('hi');
    $.ajax({
        url: 'http://localhost:3000/director',
        type: 'GET',
        // data: 
        success: function (result) {
            console.log(result);
            var teamMemberGrid = $('#teamMembers');
            let teamMemberGridContent = "";
            for (i = 0; i < result.length; i++) {
                teamMemberGridContent = `
            
                <div class="teamMember__container">
                <div class="teamMember">
                  <!-- Display photo and name -->
                  <div class="teamMember__profile">
                    <img
                    src="./assets/${result[i].dir_photo}"
                      alt="${result[i].dir_photo}"
                      class="avatar teamMember__avatar"
                    />
                    <p class="teamMember__name">${result[i].dir_name}</p>
                    <p class="teamMember__title">${result[i].dir_position}</p>
                    <!-- Display bio and name -->
                  </div>
                  <div class="teamMember__bio">
                    <p class="teamMember__name">${result[i].dir_name}</p>
                    <p class="teamMember__quote">
                      “It always amazes me how much talent there is in every corner
                      of the globe.”
                    </p>
                    <div class="teamMember__socials">
                      <a href="#" class="teamMember__socialIcon smallText">
                        <img src="./assets/icon-twitter.svg" alt="Twitter" />
                      </a>
                      <a href="#" class="teamMember__socialIcon smallText">
                        <img src="./assets/icon-linkedin.svg" alt="LinkedIn" />
                      </a>
                    </div>
                  </div>
                </div>
                <button class="teamMember__btn teamMember__btn--expand">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path
                      fill="#012F34"
                      fill-rule="evenodd"
                      d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
                    />
                  </svg>
                </button>
              </div>
            `;
            teamMemberGrid.append(teamMemberGridContent);
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
});