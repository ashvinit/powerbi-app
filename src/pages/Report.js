import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import axios from 'axios'
import './Report.css';
import NavBar from '../components/Navbar'

//const token = 'H4sIAAAAAAAEACVWxQ7sig39l7tNpTBVeoswM2cXnOCE8an_3nntzgtLlo8P-O8_dvYMU1b--fefQL_p4yIvHplNop19yU8ik6LHfE8cscbmpm0efNZP0tOSa7Bfc4yRobzFwsR_hc_ei5resFlQhNQrtufHXFHVUMJshra0OV_ttrR8WQPA1P76DCdBVd9QX_nrwkekalr0AogJJt_xPq0YvkszJKt4HSupF3vD66hzzbzzGZTO1TvCVndQhFSYTmHX1b3DhNiGTCqbEEsxB9dyyYjjtikuoBJMQT_DfYyDdy6Sjx-YOT3oky06RzxvY1P6s9BihW0Z8HoTNrfCJwfVOVQkScZbQ82SjvSWqBIJC0OVEyhSvR-1dJbZfdemWrtjHnvUnV6HrNO7SMdRZseBt6IPW7HTftmQmeJz5YiLzw42HgVJ5JF8SFA0p07z--CgqdbxTT0rFmJYyE4fLLtqCNOC43yj3bEJqNHTvgUZ5CTPUOLR6lVrTrEjOy1jPxs1WOg2orRm7Y2_v4S3fxQt4Y1zoYV-6xa80Gff409LExxkb6FK7UJGVH7bDm9noDZAKNVR3BOEVj29xwtlEKMLN8DudJfnCZwjs5LCv01hFlGNfGhyJmnO_UYkuiu2dkyLv1yKXIrugCa2dfMnZI9xYnpKyklvUY9idmJIQFz7d6wFt6dTz6stL0hfpCLhCykPZ6u4cldPkZe4YA5I8Hgb2VcnjOLmYnZwCjsoTXOCbi0tpDVOGacIopyGzwnE994nkJ_YUqKKZbXQqjfT76RkmBlPKu8wH9IHqTbu6AWo-gZunGKkd9ki-RokB48XJEf9JhalQyNGrC281nlAYZ812Q8pxi-7CH7gu1CEQytqNNJkWb0nkSWsdC21-kR0G3eEd3aZSLGbAo6UBwhoHKShKaCxsIBxoW1wkzHU9XLQGfEXGtqowTnSMbYkM4PVUlC3pOZ8IpWI9bAS7e0DZbaUwkPOj8Ix8pyiezQAQtKRDhK7ZYdYXZUrptagr-LHAGsr6D6JUpPO05HKSD3UFlneDRk-xJBjpzOCvH7nz-SBK_4u5Rj25PrsT9C4y8yMzndqqEzp6k6Htc_ivmtO7WqVdIo4hNjWTKPesZ_GGNepgKwDwnXp5xD9WINKRPgFvBHOu8QuoIo9df_YPcBULo4jxcOJXxlaRNqOx9iT4luwPZuIFPN7whOWOkybQ9AADW5f8fvJl2MShcE6afiuhUO8wpMFyh3UMUzFsGiSc1nb4HFH93Mnsq3q1zZZW8T4WBPAjwEBC5KdcbKGXM5xWRZmlh9kdgva3Tgiz4ND1eA6VZ8SNp_KBPPBjr6SqEGF-Q28DwejX7IQ5xq4OXHXKqCiEzUNRyzX00T9UsKpjqojwZLl4DfwbJ97wUKhPfjbEa1ACt1Hi9ILBk5-fFMJVO5z78jcLZzHN95jaxR7ZWLsDHHPo7bhFO8OI8dJ0t86ep-8nawYUFuR0Q7PxbshGWyin3eXZjGbrvrOLays7L0smn3jxFcwsZUr2git8Hhd8LqIpyYaz5_RKp2IFCeGhLDfoQOIU1PVPLmKSejgdHUbsuuAjLyWq2CZl2IsV0zgYEDGVGlnbFehEngzmxVg0S4SG1IxyNBafyKVZCHU50e2nPwwu8W3cRLiQOlksj5zFwsY_cCwFlRyjh6l8LQED72kDOpgHdBxVYNcn3DhLBMmzhXLj6VpEycrNvXrT8QTpe8oLg4wiuEj_uHqo7PoZbIrkfwevWoY1Ub_LjKeOHfqL4Rv91jk9aRsCXgWtEclAazIDRyUZzZbrNilOMfxA-2J71xMoMqyVwXqhTLmUNRRBbjs_lAERLlWUXhzX3NlGBPqEcQuO96zQUM4lpn_5Gm5575z-4eop-8e3vx43dHnsrL4xBisdTpAsXWEm4b4IECQt-MyElDPfLka9WtmYeIR1Ent7PZaTulStp9E7HLhp8nwYGh3-AYke0sL_UDmG16TVFfIvrLpagglLR20au-ITBbkF_SG_heeRBSu47Yi83GEXHEpJzoHNJuIaD7nDTdcTlSiEnYibrciEq7bCzYiu2Wlx0MXdLT3WeroKCHbO8Y9J3f7LkXXgPrhtGuXL5qb9ByGIIQbFKZwnIkLaHgOEnBjEoMK8Bmvi5iTal6CRyP0mNHovoRgKMfM7muONqmtHDzJEALZ2AUmWK1FLGgjK_WQSuUvbexZ5Tu5EkBZbzqfLrVtmvQqxMP4N6bcBxlQ4gGPG6EerqPVFi9ZmkV3XzO_3VSB9fyO62JG-ll_7tO13VbESo14B2fO344I5it_BaDvQ20ZRijHvpBZ9zayLJofb5fjBqGhokmcyMr8WAhkmJxLbEXv8dMejfECGBymisxY2HF36J_1BVzFob40dIKJ4ovvoCpzx8jswAVC8D1Nz_Fs_J5keiizuBna5AuWD-M_agRXahhWc5jZok1hE3YaOpe6X6_zvbqyWt1oFUGGcE44-Ybdnizuo_J9Ob5ac9UYpHWz9HRt4vOKYPbCd5bWrsEcG06Ou-BKz25DSysRZMcD1EWahP1lMNlib_2AdGCfoHkgIoqTS00jPSLF-Y5BFg9Yea5reT7bqJab0tF4zefdODGty5XM0p34vrnftJmHf4kyN2Q51hMVHHQRFnKZ_XxQ8qMqHzLd46grtgIk5LeVS9Mom_xnxnHy159__eHWZ94nrXp-r2NF7a_9kXk8ql24YPuQEwh06CHq9Ssfenxy29raj8TGFsJS1p8ukOouCDl0k1ldusbAZQdFvkA6nt7yiFKgOroZz6cdAEq2zQyQzqV4oCLetqT3NZGCKioHNYg5KJcoye6ZyJOdaqP4YZUoQDPGia3UEXgSFrTdzjcJaKEkYLs8ffOr6mO5KUrikYsLrHJkoeMeX9GZzWxUXDwlAtwpNRj7ZZp8PoZzFRhFtmQDQVKAE35x0VHEfiB8SLKver2QWl-YMZN1cmYaNCnW6WECUOx0D-afzU4XpCB-tPVzu20KIf7UO_dZwhR60UCS6IqvvPwfKXxvXTyXiIEE6ku2Eshgn7_-B_MzN9WqhD-UEZg4kjWaS2BK8-zBqqfI5P93ee3nm-3HWv3a1rrpyJ1Qxq4wQayjX8jEajCFlHRkCsoH6y0yvvh0QGftpmVkTOF6YeNswTrJeEEXiFYWMK--tOAVzXoTEIQ5JDN011bCEdrikkdEUk-JJ4gYQCEd7133EXnSn7Tbcft4WtkJI1NRMnM8Th6sXnrwn9c8WaVJ5YqbSuQWrYOWkXyS5zhjytMD5GU4F6emOyB0kLIOq1it2C1ino1spJCX0rcxkMYaU543bZCQ3K-7mSYuNX40Z92-TT0y8z6nOeC1fGDpaIrpNwles9dqgdIQD2jo80urc0qCFR983w9bmu8X9EEiB3yY-RnpaWOECgNUHo-7PPwycVCim8ZZ2SSOqvGuH8z_-S8qIg18Lg0AAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGZkNGZkY2UtZjMzZi00ZWE4LWExODQtMTdhZTNlMzgzMWY4LyIsImlhdCI6MTYyODc5MjQxNiwibmJmIjoxNjI4NzkyNDE2LCJleHAiOjE2Mjg3OTYzMTYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFneUVWblV2RHp6ei9xeWRTWVZzdzQzSm1jOHZpVmV4OUtySll3WXlORmVEWUZtS00rbmJNTFBXRlBwWUJuY1FlIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiVGhvbWFzIiwiZ2l2ZW5fbmFtZSI6IkFzaHZpbmkiLCJpcGFkZHIiOiIxMDQuMTM2LjE4OC43OSIsIm5hbWUiOiJBc2h2aW5pIFRob21hcyIsIm9pZCI6IjJjZTk2MmM4LTgyMDAtNGIzNS05YmU5LTRlMzg2YTQyYTUwZSIsInB1aWQiOiIxMDAzMjAwMTZCMjc2NTY1IiwicmgiOiIwLkFRY0F6djNVVHpfenFFNmhoQmV1UGpneC1BOEJISWRoWHJGUGc2eVlZUXAta1JBSEFPSS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJ0MTJUd0ctMlVXUVRJMl84Y21oSTZiTjIyVnNLWWZGcFBUUm9rSlp5a3FzIiwidGlkIjoiNGZkNGZkY2UtZjMzZi00ZWE4LWExODQtMTdhZTNlMzgzMWY4IiwidW5pcXVlX25hbWUiOiJhc2h2aW5pLnRob21hc0BrYXNodGVjaGxsYy5jb20iLCJ1cG4iOiJhc2h2aW5pLnRob21hc0BrYXNodGVjaGxsYy5jb20iLCJ1dGkiOiJLSkRLSk95UF8wdUdkVWNnZjJVaUF3IiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.WcgSOevS_WLMgjyUvIJO2RzTVp7hHlBpsX2sJobc2LnqZ5MBterKDjq9IPacx84ieKpYI0hBxDr32O0l1tw-_IhErd--w5oTmsoxan7B8GPlgukl5UhWSLO1SVOy8iBxeP5ovUkuoxuCcBeIJ-nH3KsfXbQJKAQ5z9HAkXe41sL02YgKzFH5ZEf_znxOZzL6f4t9EqQe25AEwsaQfZTBpwXNaw8ckRBpu7iEMnpWmDNdMc1uxoQtIwU7NiyOhE9fW28qQiK4qygV_TZApMTytk0NDuQ8lO49tDYib0-WqlubxdijEgim0mMrU06WmhYD5LV1q0mATEgPxSXrnsR9gA';
export default class Report extends React.Component {

    

    state = {
        loading: true
    }
    async componentDidMount() {
        const url = "https://api.powerbi.com/v1.0/myorg/groups/4cfc74fc-a3c6-4394-becc-f089e508034e/reports/e99b4751-02cb-495b-9d5f-4fa07dce7dc9/GenerateToken";
        
        let req = new Request(url, {
            method: 'POST',
            body: {
                "accessLevel": "View",
                "allowSaveAs": "true"
            }
        });

        fetch(req)
        .then((res) => {
            const response = JSON.stringify(res.body);
            console.log(response);
        })
    }


    render() {
        return(
            <div>
                {this.state.loading ? <div></div> : <div>...person</div> }
                <PowerBIEmbed
                embedConfig = {{
                    type: 'report',   // Supported types: report, dashboard, tile, visual and qna
                    id: 'e99b4751-02cb-495b-9d5f-4fa07dce7dc9',
                    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=e99b4751-02cb-495b-9d5f-4fa07dce7dc9&groupId=4cfc74fc-a3c6-4394-becc-f089e508034e&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJjZXJ0aWZpZWRUZWxlbWV0cnlFbWJlZCI6dHJ1ZSwidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d',
                    //accessToken: "'" + process.env.REACT_APP_ACCESS_TOKEN + "'",
                    accessToken: token,
                    tokenType: models.TokenType.Aad,
                    settings: {
                    panes: {
                        filters: {
                        expanded: false,
                        visible: false
                        }
                    },
                    background: models.BackgroundType.Transparent,
                    }
                }}

                eventHandlers = { 
                    new Map([
                    ['loaded', function () {console.log('Report loaded');}],
                    ['rendered', function () {console.log('Report rendered');}],
                    ['error', function (event) {console.log(event.detail);}]
                    ])
                }
                    
                cssClassName = { "Embed-container" }

                getEmbeddedComponent = { (embeddedReport) => {
                    window.report = embeddedReport;
                }}
                />
            </div>
        )
    }
}

