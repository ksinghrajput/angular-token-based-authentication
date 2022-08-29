import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = ''
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void { }

  submit() {
    const { username, password } = this.form.value
    if (this.form.valid && username && password) {
      this.auth.getAuthenticationToken({ username, password }).subscribe(res => {
        localStorage.setItem('token', 'eyJjdHkiOiJKV1QiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..P-Eb4mjSfP3Qz7Vd8QdKGw.6bXvff39JZqSNzSyLtYlI5zPc1qcZNctLrqhsqNXNWOF-dpQanvcFgMCYNNWVatMjskbPUkqTXowQhCI0D_70jsNvYVTd7MCA_ecEbQfv_wlr-S2iSBn-HX-YHebGqNS0pROHEw6qn08-w0moTOxr_zeKc_8CARaX3vueKogSC8wJYr9YexFVfrey3h1Vu-d41a2SGh14p79mwK6EavvMVZbmj_9eojP7WBXhYM0MIx4NJ4rP1cihmLaUg1BSTruhoqyDzWMp7u5BqEMmjHzVkEx_lRskHoaqJ7Qp9WWhgXFQ78_yfJOJsNA3vNlgMJzIlGqzMBRlJ8sIJ98VsVLPP6D3A0Rg78BxH428DmIkCZu04WpQahHGVhS8l5TQpyniDEyfJZX1SZXuoasQueRpdi0eEyGafw8e8mQgs4p7Etn7WMLR4y7i_d8IcstxY9QKIxIUUWNowiFk0YFQf2VoqRnG60-5435mk3ic1Rxq_GtvkdJRDjZR3QqLH2peLd-8HtvOesF6fix-yv8UWhNlsjx-kY3mak-yI5FFQjWEQTmtgQWlSHIqKAuopDLD9GPHLN0D5_txrsIjo0f0-6_FGlvYA5qb1BbtQ2Pnfjka_IyHH2UyMd9akqwN3GAbOlw_i7EZkgczC7XbBteJTCbhK4NDpHSFWpRNOn3SCYJX-bSiPp4jrEpEr2yKHoGAjGYHKkpP9uquSwhqAUjs7H1UT-EHiOkVXV2v9FX7CSR6sxGO5rAyhqAc5cknIKt6Vcagis8yTqRVg5cE4cmZ-J_BFRfIGi0M3UPOz_eKqW4fUdhfnP6yhOpJpAmybi4WT7yYseKhpVG8OvWYAYs4DBUM-TvjnGRsF7-WxHQkSxVcuUX0MoSq4Lsq_jamcYSfR9FaY8Y1b039s7Dy8W-Y83WZdY-lEFKp7Ar_88leuytcWdoztDp4lZjFEFfbwhb7eaQx6gm80Gexb3J-1baMSgCH4JUfzpZs1L0P3Co-WPpInOZqPk8t_dLRJGR5GX11qVjpzfZTwjqvIsV-jHuKh4WMCIr4pqObXcpWbD3cZeT5pMoYIzClt8ZLGekPrBZx9VltqMOPJsauCty-N2ipqSHlfWK7OdmoKPBPWe_W_beBBPEMPmgs0IiWZXL5xUtDwkb3Wqz7YXtspo9gdN9xcfRdjzJ50WHVfa_mRpsJC-Bb1rd8C6urhdgcDWJqUWQM_YhiRzevskoV1kKJDRePyUvnaeoptBtTJpgLSREG-QSaWEPLTeRrrQBEFLyr4-Xhh5dMuHHP3HwAApbUKw5wJBvmvJAOzBqbbzG7fpAjNGujYy_RL-0H0q8jy4AOU0y3CRs3WnY3T3oypQX1qIPnmIg2D39yTRZruluTyJimfBBty91nLtsJj1TdKb3Turm0Rq4KZ9gXmeSbYEAlXQUFbn7D_yvontvN3ecZ4LYCkfdKkfPVR_lpM71q9NiXP1q9ZHGqtUb_BMrGD1q-mwVknm3nw.RCvmiR-GdqM3lJ1NMZRYdw')
        this.router.navigateByUrl('/home');
      })
    } else {
      this.error = 'Username or password invalid'
    }
    this.form.reset();
  }

}
