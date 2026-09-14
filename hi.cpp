#include <bits/stdc++.h>
using namespace std;

#define fastio ios::sync_with_stdio(false); cin.tie(nullptr)

using ll = long long;
using vi = vector<int>;
using vl = vector<ll>;
using vc = vector<char>;
using vb = vector<bool>;
using vs = vector<string>;
using pii = pair<int, int>;
using pll = pair<ll, ll>;
using pil = pair<int, ll>;
using pli = pair<ll, int>;
using vvi = vector<vector<int>>;
using vvl = vector<vector<ll>>;
using vpii = vector<pii>;
using vpll = vector<pll>;
using vpil = vector<pil>;
using vpli = vector<pli>;
#define psb push_back
#define ppb pop_back
#define all(x) (x).begin(), (x).end()
#define rall(x) (x).rbegin(), (x).rend()

constexpr int INF = 1e9;
constexpr ll LINF = 1e18;
// constexpr int MOD = 1e9 + 7;
constexpr int MOD2 = 998244353;
constexpr int MAXN = 300005;

const ll MOD=1000000007;

void shiv() {
        int n;cin >> n;
        vi  arr(n+1);
        for(int i=1;i<=n;i++)cin>>arr[i];
        set<int> s;
        for (int i=0;i<n;i++) s.insert(i);
        vi  brr;
        for (int k=1;k<=n;k++) {
            for (int x=0;x<arr[k];x++) {
                int l=x*k;
                int r=(x+1)*k-1;
                auto it=s.lower_bound(l);
                if (it!=s.end()&&*it<=r) {
                    brr.psb(*it);
                    s.erase(it);
                }
            }
            int l=arr[k]*k;
            int r=min(n-1,(arr[k]+1)*k-1);
            while (!s.empty()) {
                auto it=s.lower_bound(l);
                if(it==s.end() || *it > r) break;
                s.erase(it);
            }
        }
        int sz=brr.size();
        cout <<sz<<endl;
        for (int x : brr) cout << x << ' ';
        cout <<endl;
    
    
}


int main()
{
    fastio;
    int t;
    cin >> t;
    while (t--)
        shiv();

    return 0;
}  

