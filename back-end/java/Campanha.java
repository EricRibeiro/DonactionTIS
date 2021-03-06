
import java.math.BigInteger;

public class Campanha {
	

	
	private Integer cdCampanha;
	private String nmCampanha;
	private String dsCampanha;
	private String cidadeCampanha;
	private String dtInicio;
	private String dtFim;
	private String imgPath;
	private Integer qtdMinVoucher;
	private BigInteger vlrInvestimento;

	public Campanha(Integer cdCampanha, String nmCampanha, String dsCampanha, String cidadeCampanha, String dtInicio, String dtFim,
			String imgPath, Integer qtdMinVoucher, BigInteger vlrInvestimento) {
		this.cdCampanha = cdCampanha;
		this.nmCampanha = nmCampanha;
		this.dsCampanha = dsCampanha;
		this.cidadeCampanha = cidadeCampanha;
		this.dtInicio = dtInicio;
		this.dtFim = dtFim;
		this.imgPath = imgPath;
		this.qtdMinVoucher = qtdMinVoucher;
		this.vlrInvestimento = vlrInvestimento;
	}
	
	public Integer getCdCampanha() {
		return cdCampanha;
	}
	public String getNmCampanha() {
		return nmCampanha;
	}
	public String getDsCampanha() {
		return dsCampanha;
	}
	public String getCidadeCampanha() {
		return cidadeCampanha;
	}
	public String getDtInicio() {
		return dtInicio;
	}
	public String getImgPath() {
		return imgPath;
	}
	public String getDtFim() {
		return dtFim;
	}
	public Integer getQtdMinVoucher() {
		return qtdMinVoucher;
	}
	public BigInteger getVlrInvestimento() {
		return vlrInvestimento;
	}
	public void setCdCampanha(Integer cdCampanha) {
		this.cdCampanha = cdCampanha;
	}
	public void setNmCampanha(String nmCampanha) {
		this.nmCampanha = nmCampanha;
	}
	public void setDsCampanha(String dsCampanha) {
		this.dsCampanha = dsCampanha;
	}
	public void setCidadeCampanha(String cidadeCampanha) {
		this.cidadeCampanha = cidadeCampanha;
	}
	public void setDtInicio(String dtInicio) {
		this.dtInicio = dtInicio;
	}
	public void setDtFim(String dtFim) {
		this.dtFim = dtFim;
	}
	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
	public void setQtdMinVoucher(Integer qtdMinVoucher) {
		this.qtdMinVoucher = qtdMinVoucher;
	}
	public void setVlrInvestimento(BigInteger vlrInvestimento) {
		this.vlrInvestimento = vlrInvestimento;
	}

	

	
	
	
}
