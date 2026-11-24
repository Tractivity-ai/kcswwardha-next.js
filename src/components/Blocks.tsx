import Image from 'next/image';
import Link from 'next/link';
import photoTour from '@/assets/img/hero-study-tour.jpg';
import photoGathering from '@/assets/img/hero-gathering.jpg';
import photoCounselling from '@/assets/img/hero-counselling.jpg';
import photoCamp from '@/assets/img/story-camp.jpg';
import photoNss from '@/assets/img/life-nss.jpg';
import photoVillage from '@/assets/img/life-village.jpg';
import photoNssTeam from '@/assets/img/life-nss-team.jpg';
import gbPrakash from '@/assets/img/gb-prakash.jpg';
import gbVanita from '@/assets/img/gb-vanita.jpg';
import gbYugant from '@/assets/img/gb-yugant.jpg';
import gbRani from '@/assets/img/gb-rani.jpg';
import gbSonali from '@/assets/img/gb-sonali.jpg';
import gbRajesh from '@/assets/img/gb-rajesh.jpg';
import gbRavikant from '@/assets/img/gb-ravikant.jpg';

const portraits = { prakash: gbPrakash, vanita: gbVanita, yugant: gbYugant, rani: gbRani, sonali: gbSonali, rajesh: gbRajesh, ravikant: gbRavikant } as const;
import { groupPages, groups, type Block, type GroupId } from '@/lib/pages';
import { site } from '@/lib/site';
import { social } from '@/lib/content';
import { Icon } from './Icon';
import { LeadForm } from './LeadForm';
import { SmartLink } from './SmartLink';

const tel = (p: string) => `tel:${p.replace(/[^\d+]/g, '')}`;

function Table({ head, rows, caption }: { head: string[]; rows: string[][]; caption?: string }) {
  return (
    <div className="tbl">
      <table>
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>{head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} data-label={head[j]}>
                  {c.startsWith('/') ? <Link className="lnk lnk--u" href={c}>Open page</Link> : c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Hub({ group }: { group: GroupId }) {
  const items = groupPages(group).filter((p) => p.path !== groups[group].href && p.blocks[0]?.t !== 'hub');
  return (
    <ul className="hub">
      {items.map((p) => (
        <li key={p.path}>
          <Link href={p.path}>
            <span className="serif">{p.title}</span>
            <Icon name="arr" className="arr" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Contact() {
  return (
    <div className="contact">
      <div className="contact__g">
        <div className="cbox">
          <p className="eyebrow">Address</p>
          <p>Kumbhalkar College of Social Work<br />{site.address[0]}<br />{site.address[1]}</p>
          <a className="lnk lnk--u" href={site.mapsUrl} target="_blank" rel="noopener noreferrer"><Icon name="pin" />Open in Maps</a>
        </div>
        <div className="cbox">
          <p className="eyebrow">Phone</p>
          {site.phones.map((p) => <a key={p} className="cl" href={tel(p)}><Icon name="phone" />{p}</a>)}
        </div>
        <div className="cbox">
          <p className="eyebrow">Email</p>
          {site.emails.map((m) => <a key={m} className="cl" href={`mailto:${m}`}><Icon name="mail" />{m}</a>)}
        </div>
        <div className="cbox">
          <p className="eyebrow">Follow</p>
          {social.map((s) => <a key={s.label} className="cl" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
        </div>
      </div>
      <p className="todo"><b>To confirm</b>Which phone number and email are the main ones. The old site shows one set in the top bar and another in the footer and on this page. Also: office hours, WhatsApp number and a map embed.</p>
      <div className="contact__form"><LeadForm /></div>
    </div>
  );
}

const PHOTOS = { tour: photoTour, gathering: photoGathering, counselling: photoCounselling, camp: photoCamp, nss: photoNss, village: photoVillage, nssTeam: photoNssTeam } as const;

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'p':
            return <p className="pg__p" key={i}>{b.text}</p>;
          case 'h':
            return b.sub
              ? <h3 className="pg__h pg__h--sub" key={i}>{b.text}</h3>
              : <h2 className="pg__h" id={b.id} key={i}>{b.text}</h2>;
          case 'toc':
            return (
              <nav className="toc" aria-label="On this page" key={i}>
                {blocks.filter((x): x is Extract<Block, { t: 'h' }> => x.t === 'h' && !x.sub && !!x.id).map((x) => (
                  <a href={`#${x.id}`} key={x.id}>{x.text}</a>
                ))}
              </nav>
            );
          case 'list': {
            const Tag = b.ordered ? 'ol' : 'ul';
            return (
              <Tag className={`pg__list${b.ordered ? ' is-ol' : ''}`} key={i}>
                {b.items.map((it) => <li key={it}>{it}</li>)}
              </Tag>
            );
          }
          case 'table':
            return <Table key={i} head={b.head} rows={b.rows} caption={b.caption} />;
          case 'docs':
            return (
              <div className="pg__docs" key={i}>
                {b.title && <p className="eyebrow">{b.title}</p>}
                <div className="dlist">
                  {b.items.map((d) => (
                    <SmartLink className="drow" href={d.href} key={d.label}>
                      <Icon name="doc" />
                      <span className="rt">{d.label}{d.note && <small>{d.note}</small>}</span>
                      <span className="tag">PDF</span>
                    </SmartLink>
                  ))}
                </div>
              </div>
            );
          case 'facts':
            return (
              <dl className="facts" key={i}>
                {b.items.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            );
          case 'sems':
            return (
              <div className="sems" key={i}>
                {b.items.map((s) => (
                  <section className="sem" key={s.title}>
                    <h3 className="serif">{s.title}</h3>
                    <ol>{s.papers.map((p) => <li key={p}>{p}</li>)}</ol>
                  </section>
                ))}
              </div>
            );
          case 'todo':
            return <p className="todo" key={i}><b>To confirm</b>{b.text}</p>;
          case 'embed':
            return (
              <div className="embed" key={i}>
                <iframe src={b.href} title={b.title} loading="lazy" />
                <SmartLink className="btn btn--maroon embed__btn" href={b.href}><span>Open {b.title}</span></SmartLink>
              </div>
            );
          case 'photo':
            return (
              <figure className="pfig" key={i}>
                <Image src={PHOTOS[b.key]} alt={b.alt} sizes="(min-width: 900px) 820px, 100vw" />
                <figcaption>{b.caption}</figcaption>
              </figure>
            );
          case 'quote':
            return (
              <figure className="sign" key={i}>
                <p className="serif">{b.text}</p>
                {b.by && <figcaption>{b.by}</figcaption>}
              </figure>
            );
          case 'gallery':
            return (
              <div className="gal" key={i}>
                {b.groups.map((g) => (
                  <section key={g.title}>
                    <h3 className="pg__h pg__h--sub">{g.title}</h3>
                    <p>{g.text}</p>
                    <ul>
                      {g.images.map((m) => (
                        <li key={m.src}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={m.src} width={m.w} height={m.h} alt={g.alt} loading="lazy" decoding="async" />
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            );
          case 'people':
            return (
              <ul className="people" key={i}>
                {b.items.map((m) => (
                  <li key={m.name}>
                    <Image src={portraits[m.photo]} alt={`Portrait of ${m.name}`} sizes="(min-width: 900px) 200px, 45vw" quality={85} />
                    <b>{m.name}</b>
                    <span>{m.role}</span>
                  </li>
                ))}
              </ul>
            );
          case 'cta':
            return (
              <p key={i} className="pg__cta">
                <SmartLink className="btn btn--maroon" href={b.href}><span>{b.label}</span></SmartLink>
              </p>
            );
          case 'hub':
            return <Hub key={i} group={b.group as GroupId} />;
          case 'contact':
            return <Contact key={i} />;
        }
      })}
    </>
  );
}
